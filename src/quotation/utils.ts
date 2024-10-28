import { z } from "zod";

export const formSchema = z.object({
  firstName: z.string().min(1, "FirstName is required"),
  lastName: z.string().min(1, "LastName is required"),
  companyName: z.string().optional(),
  address: z.string().min(1, "Address is required"),
  region: z.string().min(1, "Region/State is required"),
  road: z.string().min(1, "Road is required"),
  doorNumber: z.string().min(1, "Door number is required"),
  zipCode: z.string().min(1, "Zip Code is required"),
  email: z.string().email("Invalid email address"),
  propertyType: z.string(),
  comments: z.string().optional(),
  files: z.array(z.instanceof(File)),
});

export interface UploadedFile {
  name: string;
  size: number;
}
