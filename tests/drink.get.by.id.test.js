const chai = require(`chai`);
const chaiHttp = require(`chai-http`);

const { expect } = chai;
chai.use(chaiHttp);

const server = require(`../app`);

describe(`GET /api/drinks/a75c711a-2c9f-44f7-9762-3848165516cc`, () => {
	it(`should return a Drink object`, (done) => {
		chai
			.request(server)
			.get(`/api/drinks/a75c711a-2c9f-44f7-9762-3848165516cc`)
			.end((err, res) => {
				expect(err).to.be.null;
				expect(res).to.have.status(200);
				expect(res.body).to.be.an(`Object`);
				done();
			});
	});
});

describe(`GET /api/drinks/5423`, () => {
	it(`should return a 400 bad request error`, (done) => {
		chai
			.request(server)
			.get(`/api/drinks/5423`)
			.end((err, res) => {
				expect(err).to.be.null;
				expect(res).to.have.status(400);
				expect(res.body).to.be.an(`Object`);
				done();
			});
	});
});

describe(`GET /api/drinks/a75c711a-2c9f-44f7-9762-3848165516c9`, () => {
	it(`should return a 404 not found error`, (done) => {
		chai
			.request(server)
			.get(`/api/drinks/a75c711a-2c9f-44f7-9762-3848165516c9`)
			.end((err, res) => {
				expect(err).to.be.null;
				expect(res).to.have.status(404);
				expect(res.text).equal(`Not Found`);
				done();
			});
	});
});
