class Pact {
  constructor (executor) {
    this.resolve = (value) => {
      this.thenCb(value);
    };

    this.reject = () => {

    };

    executor(this.resolve, this.reject);
  }

  then (callback) {
    this.thenCb = callback;
  }

  catch () {

  }
}

module.exports = Pact;
