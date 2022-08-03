import axios from "axios";
import { url4 } from "./Constant";

export const getMyWallet = async () => {
  try {
    const response = await axios.get(url4, {
      headers: {
        token:
          "Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX25hbWUiOiIrOTE5NzM4OTUzMTgzIiwic2NvcGUiOlsib3BlbmlkIl0sInJhbmRvbU5vIjoiNzNkODA2YTlhY2VhNGU0Mzg0MmUxMjE0ZTlmYTM0OGIiLCJleHAiOjE2NzQ5NTcyOTAsImlhdCI6MTY1OTE3NzI5MCwiYXV0aG9yaXRpZXMiOlsiQlVTSU5FU1NfUk9MRSJdLCJqdGkiOiJhZWM0ZTFlYi1kNTZjLTQ0N2QtYmQ4Zi04ZGViN2Q4NjU4ZTEiLCJjbGllbnRfaWQiOiJ3ZWJfYXBwIn0.XhIf_EEBockbbBMVMQroAj9Z3n-yDNLRaqKaZ0-9vlhLBJAchnm7lfXjHR6xpR5kZ6B6l1eOLaFyJAuCQcUsgiy0HCXh46KCrGYKr-UCW29VwdJh-zp5gPNYY7K9P-FlJPwUNctBnhSnapRFSJlzP8v4I9NRkFaeYAkKOEVr3-dCHpj8hBf0fdIvLny5npkneyXbTOMjW318-gi5vc3LvRpljXEVrQqxfwcqYCtpHpW12_Fe12xGLTc1PoR3jeNfMy9g-sBO6lE61_avM301Nq9alnSFQHmvFDsExCQg6loHcuzE8RMK7CKaqIjmVYTVYnrPj-K5eJnXpF9SOCnGgQ",
        profileId: "73d806a9acea4e43842e1214e9fa348b",
      },
    });
    // const response = await axios.get(`${url4}?params=${data}`);
    return response.data;
    // console.log("jefhb",data)
  } catch (error) {
    console.log(error);
  }
};
