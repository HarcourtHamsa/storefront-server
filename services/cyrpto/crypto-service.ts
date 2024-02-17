import bcrypt from "bcrypt";

class CryptoService {
    private saltRounds: number = 10;

    constructor() { }

    async hashPassword(password: string) {
        try {
            const hash = await bcrypt.hash(password, this.saltRounds)
            return hash
        } catch (error) {
            throw error
        }
    }

    async comparePassword(password: string, hash: string) {
        try {
            const isMatch = await bcrypt.compare(password, hash)
            return isMatch
        } catch (error) {
            throw error
        }
    }
}

export default CryptoService