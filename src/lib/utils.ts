import { type ClassValue, clsx } from "clsx";
import { Metadata } from "next";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// export const formatPrice = (price: number) => {
//   const formatter = new Intl.NumberFormat("en-US", {
//     style: "currency",
//     currency: "USD",
//   });

//   return formatter.format(price);
// };
export const formatPrice = (price: number) => {
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
  });

  return formatter.format(price);
};

export function constructMetadata({
  title = "DaxCases - custom high-quality phone cases",
  description = "Create custom high-quality phone cases in seconds",
  image = "/dax.jpg",
  icons = "/favicon.ico",
}: {
  title?: string;
  description?: string;
  image?: string;
  icons?: string;
} = {}): Metadata {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@daxcases",
    },
    icons,
    metadataBase: new URL("https://daxcases.vercel.app/"),
  };
}
