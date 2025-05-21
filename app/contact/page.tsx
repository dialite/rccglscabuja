"use client";

import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Textarea } from "@/components/ui/textarea";
import { PiSmiley } from "react-icons/pi";
import Navbar from "@/components/navbar";

const FormSchema = z.object({
  first_name: z.string().min(1, "Please enter your first name"),
  last_name: z.string().min(1, "Please enter your last name"),
  email: z.string().email("Please enter a valid email"),
  role_in_church: z.string().min(1, "Please enter your role"),
  church_name: z.string().optional(),
  inquiry: z.enum([
    "Join a Small Group",
    "Volunteer",
    "Request Prayer",
    "Learn More",
    "Other",
  ]),
  interested_ministry: z.enum([
    "Worship Service",
    "Youth Ministry",
    "Volunteer Opportunities",
    "Counseling",
    "Other",
  ]),
  additional_info: z.string().optional(),
  terms: z.boolean().refine((val) => val === true, {
    message: "You must agree to receive communications",
  }),
});

type FormValues = z.infer<typeof FormSchema>;

export default function ChurchContactForm() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const form = useForm<FormValues>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      role_in_church: "",
      church_name: "",
      inquiry: "Learn More",
      interested_ministry: "Worship Service",
      additional_info: "",
      terms: false,
    },
  });

  async function onSubmit(data: FormValues) {
    try {
      setLoading(true);
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("Something went wrong");
      }

      setSubmitted(true);
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Navbar
        scrollToWebsiteDesign={() => {}}
        scrollToGraphicDesign={() => {}}
        scrollToShopifyStores={() => {}}
        scrollToBrands={() => {}}
        // scrollToServices={() => {}}
      />

      <div className="md:flex items-start justify-center md:py-20 px-6 mt-12">
        <div>
          <h1 className="text-5xl font-medium w-full md:w-2/3 pb-5 md:text-7xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
            Contact Our Church Team
          </h1>
          <p className="py-4 text-gray-300">
            We&apos;d love to hear from you! How can we assist you in your faith
            journey?
          </p>

          <div className="bg-[#f6f5f4] md:w-4/5 space-y-6 p-4 rounded-2xl my-4 hidden md:flex md:flex-col">
            <p className="font-normal pb-4">
              One welcoming community to support your spiritual growth and
              fellowship.
            </p>
            <p className="font-normal pb-4">
              Ministries and programs designed to serve all ages and
              backgrounds.
            </p>
            <p className="font-normal pb-4">
              Dedicated pastoral and volunteer support to guide you along the
              way.
            </p>
          </div>
        </div>

        <Form {...form}>
          {!submitted ? (
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-4 h-full border rounded-3xl p-10 md:w-1/3"
            >
              <div className="md:flex items-center gap-6">
                <FormField
                  control={form.control}
                  name="first_name"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                        First Name *
                      </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="last_name"
                  render={({ field }) => (
                    <FormItem className="w-full">
                      <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                        Last Name *
                      </FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                      Email *
                    </FormLabel>
                    <FormControl>
                      <Input {...field} type="email" />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="role_in_church"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                      Your Role in Church
                    </FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        placeholder="E.g., Member, Volunteer, Visitor"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="church_name"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                      Church or Ministry Name (optional)
                    </FormLabel>
                    <FormControl>
                      <Input {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="interested_ministry"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                      Ministry or Service Interested In
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Worship Service">
                          Worship Service
                        </SelectItem>
                        <SelectItem value="Youth Ministry">
                          Youth Ministry
                        </SelectItem>
                        <SelectItem value="Volunteer Opportunities">
                          Volunteer Opportunities
                        </SelectItem>
                        <SelectItem value="Counseling">Counseling</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="inquiry"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                      How can we help you?
                    </FormLabel>
                    <Select onValueChange={field.onChange} value={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select an option" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Join a Small Group">
                          Join a Small Group
                        </SelectItem>
                        <SelectItem value="Volunteer">Volunteer</SelectItem>
                        <SelectItem value="Request Prayer">
                          Request Prayer
                        </SelectItem>
                        <SelectItem value="Learn More">Learn More</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="additional_info"
                render={({ field }) => (
                  <FormItem className="w-full">
                    <FormLabel className="text-sm bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 bg-opacity-50">
                      Additional Information
                    </FormLabel>
                    <FormControl>
                      <Textarea style={{ height: "100px" }} {...field} />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="terms"
                render={({ field }) => (
                  <FormItem className="flex items-center gap-4">
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                      className="outline border-2 text-sm font-light bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400"
                    />
                    <div className="text-xs font-light md:w-3/4 mb-1 bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                      I agree to receive email updates and communications from
                      the church.
                    </div>
                  </FormItem>
                )}
              />

              <Button
                type="submit"
                variant="default"
                disabled={loading}
                className="w-full mt-4 bg-gradient-to-r from-orange-500 to-pink-500 border-0 hover:from-pink-500 hover:to-orange-500"
              >
                {loading ? "Sending..." : "Submit"}
              </Button>
            </form>
          ) : (
            <div className="flex flex-col items-center justify-center py-12 px-4 rounded-3xl md:w-1/3 space-y-2">
              <PiSmiley className="text-6xl bg-gradient-to-b from-orange-500 to-pink-500 text-transparent bg-clip-text" />
              <h2 className="text-3xl font-bold bg-gradient-to-b from-neutral-50 to-neutral-400 text-transparent bg-clip-text">
                Thank you!
              </h2>
              <p className="text-sm text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400">
                We appreciate your message. Our team will get back to you soon.
              </p>
            </div>
          )}
        </Form>
      </div>
    </div>
  );
}
