import { expect, it } from 'vitest'
import { isIdentityFormat } from './index'

it("身份证格式", () => {
    expect(isIdentityFormat("1")).toEqual(false);
    expect(isIdentityFormat("350781196403073268")).toEqual(true);
})