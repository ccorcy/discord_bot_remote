import axios from 'axios';

export interface ISound {
  id?: string;
  name: string;
  filename?: string;
  isDefault?: boolean;
  url?: string;
  picture?: string;
}
class Api {
  public instance = axios.create({
    baseURL: 'https://dank-discord-bot.herokuapp.com/',
    timeout: 10000,
  });

  public async getSounds() {
    const response = await this.instance.get<ISound[]>('/sounds');
    return response.data;
  }

  public async addSound({
    name, filename, url, picture,
  }: ISound) {
    const response = await this.instance.post('/sounds/add_sound', {
      name,
      filename,
      url,
      picture,
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

  public async getStatus() {
    return this.instance.get('/bot/status');
  }

  public async summon(channelName: string) {
    return this.instance.get(`/bot/summon/${channelName}`);
  }
}

export default new Api();
