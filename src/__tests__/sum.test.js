
import { sum } from "../utils/sum";
test("Sum of a and b are being tested",()=>{
    const res = sum(2,3);
    expect(res).toBe(5);
})