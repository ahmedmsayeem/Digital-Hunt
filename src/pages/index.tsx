import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Instagram() {
  const { data: sessionData, status: status } = useSession();
  const router = useRouter();
  const { error } = router.query;

  // User should be promted to login after sometime so that we can check createdAt
  //Instagram route
  //hidden element to ksjf38949.tsx
  if (status === "unauthenticated") {
    return <main className="w-screen h-screen flex flex-col justify-center items-center gap-4">
      {error && <div className="text-red-600">Please use nmamit email to login</div>}
      <button className="bg-black rounded-lg shadow-lg text-white px-4 py-2"
        onClick={() => signIn("google")}>Sign in</button>
    </main>;
  }
  if (status === "loading") {
    return <main className="w-screen h-screen flex flex-col justify-center items-center gap-4">
      <div className="text-2xl">Loading...</div>
    </main>;
  }
  else {
    // router.replace({ pathname: router.pathname, query: "" }, undefined, { shallow: true }).catch((e) => console.error(e))
    return (
      <>
        <Head>
          <title>Instagram</title>
          <link
            data-default-icon="https://static.cdninstagram.com/rsrc.php/v3/yI/r/VsNE-OHk_8a.png"
            rel="icon"
            sizes="192x192"
            href="https://static.cdninstagram.com/rsrc.php/v3/yI/r/VsNE-OHk_8a.png"
          ></link>
          <link
            rel="apple-touch-icon"
            sizes="76x76"
            href="https://static.cdninstagram.com/rsrc.php/v3/yR/r/lam-fZmwmvn.png"
          ></link>
          <meta name="description" content="Intsgram not Instagram ..." />
        </Head>

        <main className="flex min-h-screen flex-col justify-between pb-16 pt-28">
          <div className="flex w-full items-center justify-center gap-10">
            <section>
              <img
                src="/assets/phone-static.png"
                alt="PhoneStatic"
                title="PhoneStatic"
              />
            </section>

           
            <section className="w-[18%]">
              <div className="border border-gray-300 px-10 pb-4 pt-12">
                <h1 title="Instagram" className="flex justify-center pb-10">
                  <img
                    src="/assets/instagram-logo.png"
                    alt="Instagram logo"
                    title="Instagram logo"
                  />
                </h1>

                <section className="space-y-4">
                  <div className="grid grid-cols-1 gap-2 text-xs">
                    <input
                      type="text"
                      placeholder="Phone number, username, or email"
                      className="rounded-sm border border-gray-300 px-2 py-1"
                    />
                    <input
                      type="text"
                      placeholder="Password"
                      className="rounded-sm border border-gray-300 px-2 py-1"
                    />
                  </div>

                  <button className="w-full rounded-lg bg-[#4CB5F9] py-2 text-sm font-bold text-white">
                    Log in
                  </button>
                </section>

                <div className="flex items-center justify-center py-4">
                  <span className="w-full border-b border-gray-300"></span>
                  <span className="mx-4 text-sm font-bold text-gray-400">OR</span>
                  <span className="w-full border-b border-gray-300"></span>
                </div>

                <div className="space-y-4">
                  <button className="w-full text-center text-sm font-bold text-[#385185]">
                    Log in with Google
                  </button>
                  <button className="w-full text-center text-xs text-gray-600">
                    Forgot password?
                  </button>
                </div>
              </div>
              <Link
                href="/kjsf38949"
                className="flex justify-center text-xs text-white"
              >
                Click here
              </Link>
              <div className="mb-4 border border-gray-300 px-10 py-6">
                <div className="flex items-center justify-center space-x-2 text-sm">
                  <p className="text-gray-700">Don&apos;t have an account?</p>
                  <a href="#" className="font-semibold text-[#4CB5F9]">
                    Sign up
                  </a>
                </div>
              </div>

              <div className="flex justify-center">
                <div className="space-y-2">
                  <p className="text-center text-sm">Get the app.</p>
                  <div className="flex space-x-4">
                    <a
                      href="https://l.instagram.com/?u=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.instagram.android%26referrer%3Dig_mid%253DC7C20C7E-5A32-45C3-98AF-3F866A3222B3%2526utm_campaign%253DloginPage%2526utm_content%253Dlo%2526utm_source%253Dinstagramweb%2526utm_medium%253Dqr_code%2526original_referrer%253Dhttps%25253A%25252F%25252Fwww.instagram.com%25252F&e=AT2uI_KbHiql1StX6Fq8UnHII_94-Cualyb9_kaI3HYBlm7nb48QxNpLmthQHU-qUftbBnVObnPvQIvhelthyht5TbgrFrS5hg-G6OkEdfC_nDC7kQ1P2g4hcoi6lZQZD4YYhYag5rZwxUbPZ0733zldB66aChX2g5h-Gg"
                      target="_blank"
                    >
                      <img
                        src="/assets/googleplay-button.png"
                        alt="GooglePlayButton"
                        title="GooglePlayButton"
                        className="h-[40px]"
                      />
                    </a>
                    <a
                      href="ms-windows-store://pdp/?productid=9nblggh5l9xt&referrer=appbadge&source=www.instagram.com&mode=mini&pos=0%2C0%2C1920%2C1032"
                      target="_blank"
                    >
                      <img
                        src="/assets/microsoft-button.png"
                        alt="AppStoreButton"
                        title="AppStoreButton"
                        className="h-[40px]"
                      />
                    </a>
                  </div>
                </div>
              </div>
            </section>
          </div>

          <footer className="flex flex-col space-y-4">
            <ul className="flex w-full justify-center space-x-3 text-xs text-gray-500">
              <a href="https://about.meta.com/" target="_blank">
                <li>Meta</li>
              </a>
              <a href="https://about.instagram.com/" target="_blank">
                <li>About</li>
              </a>
              <a href="https://about.instagram.com/blog/" target="_blank">
                <li>Blog</li>
              </a>
              <a href="https://www.instagram.com/about/jobs/" target="_blank">
                <li>Jobs</li>
              </a>
              <a href="https://help.instagram.com/" target="_blank">
                <li>Help</li>
              </a>
              <a
                href="https://developers.facebook.com/docs/instagram"
                target="_blank"
              >
                <li>API</li>
              </a>
              <a href="https://www.instagram.com/legal/privacy/" target="_blank">
                <li>Privacy</li>
              </a>
              <a href="https://www.instagram.com/legal/terms/" target="_blank">
                <li>Terms</li>
              </a>
              <a
                href="https://www.instagram.com/explore/locations/"
                target="_blank"
              >
                <li>Locations</li>
              </a>
              <a href="https://www.instagram.com/web/lite/" target="_blank">
                <li>Instagram Lite</li>
              </a>
              <a href="https://www.threads.net/" target="_blank">
                <li>Threads</li>
              </a>
              <a
                href="https://l.instagram.com/?u=https%3A%2F%2Fwww.facebook.com%2Fhelp%2Finstagram%2F261704639352628&e=AT2uI_KbHiql1StX6Fq8UnHII_94-Cualyb9_kaI3HYBlm7nb48QxNpLmthQHU-qUftbBnVObnPvQIvhelthyht5TbgrFrS5hg-G6OkEdfC_nDC7kQ1P2g4hcoi6lZQZD4YYhYag5rZwxUbPZ0733zldB66aChX2g5h-Gg"
                target="_blank"
              >
                <li>Contact Uploading & Non-Users</li>
              </a>
              <a
                href="https://about.meta.com/technologies/meta-verified/"
                target="_blank"
              >
                <li>Meta Verified</li>
              </a>
            </ul>

            <div className="flex w-full justify-center space-x-3 text-xs text-gray-500">
              <p>English</p>
              <p>© 2023 Instagram from Meta</p>
            </div>
          </footer>
        </main>
      </>
    );
  }
}
