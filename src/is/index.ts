/**是否为身份证格式 */
export function isIdentityFormat(value: string): boolean {
    if (/(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/.test(value)) {
        return true;
    }
    return false;
}

/**是否为电话格式，包含手机和座机 */
export function isPhoneFormat(value: string): boolean {
    if (/^1[3456789]\d{9}$/.test(value) || /^((0\d{2,3})-)?(\d{7,8})$/.test(value)) {
        return true;
    }
    return false;
}

/**是否为邮箱格式 */
export function isEamilFormat(text: string): boolean {
    if (/\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(text)) {
        return true;
    }
    return false;
}