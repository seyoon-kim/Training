var Domutil = Domutil || {};

Domutil.querySelector = function(){
  return [];
}

describe("Domutil.querySelector function should be return array ", function(){
  it("should be return array", function(){
    expect(Array.isArray(Domutil.querySelector())).toBe(true);
  });
});
