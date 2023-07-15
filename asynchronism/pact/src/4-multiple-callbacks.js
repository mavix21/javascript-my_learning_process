class Pact {
  constructor (executor) {
    this.thenFns = [];
    this.catchFns = [];
    this.resolve = (value) => {
      this.thenFns.forEach(fn => fn(value));
    };

    this.reject = (err) => {
      this.catchFns.forEach(fn => fn(err));
    };

    executor(this.resolve, this.reject);
  }

  then (callback) {
    this.thenFns.push(callback);
  }

  catch (callback) {
    this.catchFns.push(callback);
  }
}

module.exports = Pact;
