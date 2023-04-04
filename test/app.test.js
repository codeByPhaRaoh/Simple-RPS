/* eslint-disable jest/valid-expect */
import chai from "chai";
import chaiHttp from "chai-http";
import app from "../app.js";

chai.use(chaiHttp);
const { expect } = chai;

describe("GET /", () => {
    it("should return with status code 200", (done) => {
        chai.request(app)
            .get("/")
            .end((err, res) => {
                expect(res).to.have.status(200);
                done();
            });
    });
});


describe("POST /game", () => {
    it("should return with status code 200 and a result that includes 'wins' or 'tie'", (done) => {
        chai.request(app)
            .post("/game")
            .send({ name: "Pierre", play: "rock" })
            .end((err, res) => {
                expect(res).to.have.status(200);
                expect(res.text).to.include.oneOf(["wins", "tie"]);
                done();
            });
    });
});
