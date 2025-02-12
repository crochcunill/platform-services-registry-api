import ClientConnection from "./clientConnection.js";

const SERVICE = "CHES";

export default class ChesService {
  constructor({ tokenUrl, clientId, clientSecret, apiUrl }) {
    // console.log(
    //   "ChesService",
    //   `Constructed with ${tokenUrl}, ${clientId}, clientSecret, ${apiUrl}`
    // );
    if (!tokenUrl || !clientId || !clientSecret || !apiUrl) {
      console.log("Invalid configuration.", { function: "constructor" });
      throw new Error("ChesService is not configured. Check configuration.");
    }
    this.connection = new ClientConnection({
      tokenUrl,
      clientId,
      clientSecret,
    });
    this.axios = this.connection.axios;
    this.apiUrl = apiUrl;
  }

  async health() {
    try {
      const { data, status } = await this.axios.get(`${this.apiUrl}/health`, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return { data, status };
    } catch (e) {
      console.log(SERVICE);
    }
  }

  async getStatus(params, query) {
    try {
      if (params && params.msgId) {
        const { data, status } = await this.axios.get(
          `${this.apiUrl}/status/${params.msgId}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        return { data, status };
      } else {
        const { data, status } = await this.axios.get(`${this.apiUrl}/status`, {
          params: query,
          headers: {
            "Content-Type": "application/json",
          },
        });
        return { data, status };
      }
    } catch (e) {
      console.log(SERVICE);
    }
  }

  async cancel(params, query) {
    try {
      if (params && params.msgId) {
        const { data, status } = await this.axios.delete(
          `${this.apiUrl}/cancel/${params.msgId}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        return { data, status };
      } else {
        const { data, status } = await this.axios.delete(
          `${this.apiUrl}/cancel`,
          {
            params: query,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        return { data, status };
      }
    } catch (e) {
      console.log("Ches email error");
    }
  }

  async send(email) {
    try {
      const { data, status } = await this.axios.post(
        `${this.apiUrl}/email`,
        email,
        {
          headers: {
            "Content-Type": "application/json",
          },
          maxContentLength: Infinity,
          maxBodyLength: Infinity,
        }
      );
      return { data, status };
    } catch (e) {
      console.log(SERVICE);
    }
  }

  async merge(mergeData) {
    try {
      const { data, status } = await this.axios.post(
        `${this.apiUrl}/emailMerge`,
        mergeData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          maxContentLength: Infinity,
          maxBodyLength: Infinity,
        }
      );
      return { data, status };
    } catch (e) {
      console.log(SERVICE);
    }
  }

  async mergePeview(mergeData) {
    try {
      const { data, status } = await this.axios.post(
        `${this.apiUrl}/emailMerge/preview`,
        mergeData,
        {
          headers: {
            "Content-Type": "application/json",
          },
          maxContentLength: Infinity,
          maxBodyLength: Infinity,
        }
      );
      return { data, status };
    } catch (e) {
      console.log(SERVICE);
    }
  }

  async promote(params, query) {
    try {
      if (params && params.msgId) {
        const { data, status } = await this.axios.post(
          `${this.apiUrl}/promote/${params.msgId}`,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        return { data, status };
      } else {
        const { data, status } = await this.axios.post(
          `${this.apiUrl}/promote`,
          {
            params: query,
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        return { data, status };
      }
    } catch (e) {
      console.log(SERVICE);
    }
  }
}
