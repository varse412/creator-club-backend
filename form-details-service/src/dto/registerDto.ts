import { z } from 'zod';

export const RegisterSchema = z.object({
  name: z.string().min(1),
  instaHandle: z.string().min(1),
  followersCount: z.enum([
    'less than 5k', '5-10k', '10-25k', '25-50k', '50k-100k',
    '100-250k', '250k-500k', '500k-1m', '1m-2m', '2m-5m',
    '5m-10m', '10m-25m', '25m-50m', '50m+'
  ]),
  maxViews: z.enum([
    'less than 10k', '10k+', '50k+', '100k+', '500k+', '1m+', '5m+', '10m+'
  ]),
  everHadBrandDeal: z.enum(['yes', 'no', "don't want to share"])
});

export type RegisterDto = z.infer<typeof RegisterSchema>;