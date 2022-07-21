import {
  StringSession,
  TelegramClient,
} from "https://deno.land/x/grm@v0.2.3/mod.ts";
import { code } from "https://deno.land/x/grm_parse@0.0.3/mod.ts";

const client = new TelegramClient(
  new StringSession(""),
  Number(prompt("API ID:")),
  prompt("API hash:")!,
);
await client.start({
  phoneNumber: () => prompt("Phone number:")!,
  password: () => prompt("Password:")!,
  phoneCode: () => prompt("Confirmation code:")!,
  onError: console.error,
});
await client.sendMessage(
  "me",
  code(client.session.save() as unknown as string).send,
);
console.clear();
console.log("The session was sent to saved messages");
