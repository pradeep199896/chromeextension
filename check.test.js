const {Cut}=require("./checking.js")
describe("Checking data",()=>
{
    test("Fetched data",()=>
    {
    expect(Cut()).toEqual(192)
    })
})