describe("Rock, Paper, Scisssors", function (){
  it("works", function() {
    expect(true).toBe(true)
  });

  it("rock beats scissors", function() {
    actual   = doesBeat('rock', 'scissors');
    expected = true;

    expect(actual).toBe(expected)
  });

  it("paper beats rock", function() {
    actual   = doesBeat('paper', 'rock');
    expected = true;

    expect(actual).toBe(expected)
  });
});
