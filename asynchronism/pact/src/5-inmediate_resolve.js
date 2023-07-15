const STATUS = {
  PENDING: 0,
  RESOLVED: 1,
  REJECTED: 2
};

class Pact {
  constructor (executor) {
    this.thenFns = [];
    this.catchFns = [];
    this.status = STATUS.PENDING;
    this.resolve = (value) => {
      this.resolvedValue = value;
      this.status = STATUS.RESOLVED;
      this.thenFns.forEach(fn => fn(value));
    };

    this.reject = (err) => {
      this.rejectedValue = err;
      this.status = STATUS.REJECTED;
      this.catchFns.forEach(fn => fn(err));
    };

    executor(this.resolve, this.reject);
  }

  then (callback) {
    if (this.status === STATUS.PENDING) {
      return new Pact((resolve, reject) => {
        this.thenFns.push((val) => {
          resolve(callback(val));
        });
      });
    } else if (this.status === STATUS.RESOLVED) {
      callback(this.resolvedValue);
    }
  }

  catch (callback) {
    if (this.status === STATUS.PENDING) {
      this.catchFns.push(callback);
    } else if (this.status === STATUS.REJECTED) {
      callback(this.rejectedValue);
    }
  }
}

module.exports = Pact;
