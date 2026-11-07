import type { Metadata } from "next";
import { ProsePage } from "@/components/prose";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy policy",
  description: "Board Pilot has no accounts, no analytics, no ads and no tracking. Your data stays between your phone and your PC.",
};

export default function Privacy() {
  return (
    <ProsePage title="Privacy" serif="policy." intro={<p>Last updated: 7 November 2026.</p>}>
      <section>
        <h2>We collect no data</h2>
        <p>
          Board Pilot has no accounts, no analytics, no ads and no tracking. Board Pilot does not collect, store or
          share your personal data.
        </p>
      </section>
      <section>
        <h2>Your server</h2>
        <p>
          The app talks only to the server address that you enter. That server runs on your own computer. Your
          projects, board files and chats stay between your phone and your computer.
        </p>
      </section>
      <section>
        <h2>The design lead and Claude</h2>
        <p>
          The design lead runs on your computer with your own Claude account. The text you send to the lead and the
          files it reads are processed by Anthropic under the terms of your Claude account.
        </p>
      </section>
      <section>
        <h2>Push notifications</h2>
        <p>
          If you allow notifications, the app registers a device token with the Expo push service. Your server then
          sends short notification texts through Expo and Apple&apos;s push service, for example when the lead is
          done or has a question. The notifications contain no file contents.
        </p>
      </section>
      <section>
        <h2>Files and photos</h2>
        <p>Files and photos that you attach in the chat are uploaded only to your server.</p>
      </section>
      <section>
        <h2>On your phone</h2>
        <p>
          The server address and token are stored in the iOS keychain on your device. Delete the app to remove them.
        </p>
      </section>
      <section>
        <h2>Contact</h2>
        <p>
          Questions: <a href={`mailto:${CONTACT}`}>{CONTACT}</a>
        </p>
      </section>
    </ProsePage>
  );
}
