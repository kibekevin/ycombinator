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
}
};

export default nextConfig;
