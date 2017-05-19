export class AppStorage {
    static storage = new Map();

    static setItem (key, value) {
        AppStorage.storage.set(key, value)
    }

    static getItem (key) {
        return AppStorage.storage.get(key)
    }
}