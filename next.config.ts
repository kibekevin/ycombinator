import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */

//   Allowed Image Hosts
images: {
    //dangerouslyAllowSVG:true, //Allows images that are not of format PNG, JPEG e.t.c
    remotePatterns:[
        {
            protocol:'https', //Allows Images from https protocol only
            hostname:'*'  //Allows Images from all sources
        }
    ]
},

// experimental: {
//     ppr: "incremental"
// },

// devIndicators: {
//     appIsrStatus: true,
//     buildActivity: true,
//     buildActivityPosition: "bottom-right"
// }

//Instead of using ppr which requires Next.js Canary, I will implement React Suspense with Server Components

};

export default nextConfig;
