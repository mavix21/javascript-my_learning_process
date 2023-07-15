class Pact {
  constructor (executor) {
    this.resolve = () => {

    };

    this.reject = () => {

    };

    executor(this.resolve, this.reject);
  }

  then () {

  }

  catch () {

  }
}

module.exports = Pact;
