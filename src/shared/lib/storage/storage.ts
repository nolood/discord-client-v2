interface IStorage {
  token?: string | null;
}

export class Storage {
  public get<T extends keyof IStorage>(key: T): IStorage[T] {
    const data = localStorage.getItem(key);

    if (data) {
      return JSON.parse(data);
    }

    return null;
  }

  public set<T extends keyof IStorage>(key: T, value: IStorage[T]): void {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public remove(key: keyof IStorage): void {
    localStorage.removeItem(key);
  }
}

export default new Storage();
