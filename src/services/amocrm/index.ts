import { url, token } from './creds';

export class Amocrm {
  static async getLeads(query = '') {
    try {
      const response = await fetch(
        `${url}/leads?with=contacts&query=${query}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );

      const leads =
        response.statusText === 'OK'
          ? (await response.json())._embedded?.leads
          : [];

      return leads;
    } catch (err) {
      console.log('Error getting leads: ', err);
    }
  }

  static async getContactById(id: string | number) {
    try {
      const response = await fetch(`${url}/contacts/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await response.json();

      return data;
    } catch (err) {
      console.log('Error getting contact by id: ', err);
    }
  }

  static async getUserById(id: string | number) {
    try {
      const response = await fetch(`${url}/users/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await response.json();

      return data;
    } catch (err) {
      console.log('Error getting contact by id: ', err);
    }
  }
}
