import axios from 'axios';

export interface ISound {
  id?: string;
  name: string;
  filename: string;
}

export default class Api {
  public instance = axios.create({
    baseURL: 'https://dank-discord-bot.herokuapp.com/',
    timeout: 10000,
  });

  public async getSounds() {
    const response = await this.instance.get<ISound[]>('/sounds');
    return response.data;
  }

  public async addSound({ name, filename }: ISound) {
    const response = await this.instance.post('/sounds/add_sound', {
      name,
      filename,
    });
    return response;
  }

  public async playSound(soundId: string) {
    const response = await this.instance.post('/sounds/play_sound', {
      id: soundId,
    });
    return response;
  }

  public async deleteSound(soundId: string) {
    await this.instance.delete(`/sounds/${soundId}`);
  }
}
