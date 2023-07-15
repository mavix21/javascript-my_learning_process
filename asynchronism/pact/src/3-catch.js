class Pact {
  constructor (executor) {
    this.resolve = (value) => {
      this.thenCb(value);
    };

    this.reject = (err) => {
      this.catchCb(err);
    };

    executor(this.resolve, this.reject);
  }

  then (callback) {
    this.thenCb = callback;
  }

  catch (callback) {
    this.catchCb = callback;
  }
}

module.exports = Pact;
