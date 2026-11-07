import type { Metadata } from "next";
import { ProsePage } from "@/components/prose";
import { CONTACT } from "@/lib/site";

export const metadata: Metadata = {
  title: "Support",
  description: "Connect Board Pilot to your server, try the demo, set up push notifications, or contact us.",
};

export default function Support() {
  return (
    <ProsePage title="Support," serif="step by step." intro={<p>Help for the Board Pilot app and server.</p>}>
      <section>
        <h2>Connect to your server</h2>
        <ul>
          <li>Open Settings in the app.</li>
          <li>Enter the address of your Board Pilot server and its token. The server shows the token when you install it.</li>
          <li>Tap Test connection.</li>
        </ul>
        <p>
          Your phone and your PC must be on the same Tailscale network. If the test fails, make sure that Tailscale
          is on, on both devices, and that the server is running.
        </p>
      </section>
      <section>
        <h2>Try the demo</h2>
        <p>
          Tap &quot;Try the demo&quot; on the first screen, or turn on Demo mode in Settings. The demo uses built-in
          sample data, so you do not need a server.
        </p>
      </section>
      <section>
        <h2>Push notifications</h2>
        <p>
          Allow notifications when the app asks. The server then tells you when the lead is done or has a question. If
          you get no notifications, turn them on for Board Pilot in the iOS Settings app, then open Board Pilot again.
        </p>
      </section>
      <section>
        <h2>Contact</h2>
        <p>
          Email: <a href={`mailto:${CONTACT}`}>{CONTACT}</a>
        </p>
      </section>
    </ProsePage>
  );
}
