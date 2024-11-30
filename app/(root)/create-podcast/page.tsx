"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { set, useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { create } from "domain"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { cn } from "@/lib/utils"
import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
import GeneratePodcast from "@/components/GeneratePodcast"
import GenerateThumbnail from "@/components/GenerateThumbnail"
import { Loader } from "lucide-react"
import { Id } from "@/convex/_generated/dataModel"
import { useToast } from "@/hooks/use-toast"
import { useMutation } from "convex/react"
import { api } from "@/convex/_generated/api"
import { useRouter } from "next/navigation"


const formSchema = z.object({
  podcastTitle: z.string().min(2),
  podcastDescription: z.string().min(2),
})

const voiceCategories = ['alloy', 'shimmer', 'nova', 'echo', 'fable', 'onyx'];

const CreatePodcast = () => {
  const router = useRouter()
  const [voiceType, setVoiceType] = useState<string | null>(null)
  const[isSubmitting, setIsSubmitting] = useState(false)
  const[imagePrompt, setImagePrompt] = useState('')
  const[imageUrl, setImageUrl] = useState('')
  const[audioStorageId, setAudioStorageId] = useState<Id<"_storage"> | null>(null)
  const[audioUrl, setAudioUrl] = useState('');
  const[audioDuration, setAudioDuration] = useState(0);
  const[voicePrompt, setVoicePrompt] = useState('')
  const {toast} = useToast()
  const[imageStorageId, setImageStorageId] = useState<Id<"_storage"> | null>(null)

  const createPodcast = useMutation(api.podcasts.createPodcast)


  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      podcastTitle: "",
      podcastDescription: "",
    },
  })
 
  // 2. Define a submit handler.
  async function onSubmit(data: z.infer<typeof formSchema>) {
    try{
      setIsSubmitting(true)
      if(!audioUrl || !imageUrl || !voiceType){
        toast({
          title: "Please generate audio and image for your podcast",
        })
        setIsSubmitting(false)
        throw new Error("Please generate audio and image for your podcast")
      }

      const podcast = await createPodcast({
        podcastTitle: data.podcastTitle,
        podcastDescription: data.podcastDescription,
        audioUrl,
        audioStorageId: audioStorageId!,
        imageUrl,
        imageStorageId: imageStorageId!,
        voiceType,
        audioDuration,
        voicePrompt,
        imagePrompt,
        views: 0,
        
      })
      toast({
        title: "Podcast Created Successfully",
      })
      setIsSubmitting(false);
      router.push('/');
    }catch(error){
      console.log(error)
      toast({
        title: "Error while submitting your podcast",
        variant: "destructive",
        
      })
      setIsSubmitting(false)
    }
  }

  return (
    <section className="mt-10 flex flex-col">
      <h1 className="text-20 font-bold text-white-1">Create Podcast</h1>

    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="mt-12 flex w-full flex-col">
        <div className="flex flex-col gap-[30px] border-b border-black-5 pb-10" >
        <FormField
          control={form.control}
          name="podcastTitle"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2.5">
              <FormLabel className="text-16 font-bold text-white-1">Username</FormLabel>
              <FormControl>
                <Input className="input-class focus-visible:ring-offset-orange-1" placeholder="MicFlow Podcast.."{...field} />
              </FormControl>
              <FormMessage className="text-white-1"/>
            </FormItem>
          )}
        />

        <div className="flex flex-col gap-2.5">
          <Label className="text-16 font-bold text-white-1 ">
            Select AI Voice
          </Label>
          <Select onValueChange={(value) => setVoiceType(value)}>
            <SelectTrigger className={cn('text-16 w-full border-none bg-black-1 text-gray-1 focus-visible:ring-offset-orange-1')}>
              <SelectValue className="focus-visible:ring-offset-orange-1" placeholder="Select AI Voice" />
            </SelectTrigger>
            <SelectContent className="text-16 border-none bg-black-1 font-bold text-white-1">
            {voiceCategories.map((category) => (
                <SelectItem className="capitalize focus:bg-orange-1 " key={category} value={category}>
                  {category} 
                </SelectItem> 
              ))}
            </SelectContent>
            {voiceType && 
              <audio
                src={`/${voiceType}.mp3`}
                autoPlay
                className="hidden" />
             }
          </Select>

        </div>
        <FormField
          control={form.control}
          name="podcastDescription"
          render={({ field }) => (
            <FormItem className="flex flex-col gap-2.5">
              <FormLabel className="text-16 font-bold text-white-1">Descriptiom</FormLabel>
              <FormControl>
                <Textarea className="input-class focus-visible:ring-offset-orange-1" placeholder="Write a short description for your podcast.."{...field} />
              </FormControl>
              <FormMessage className="text-white-1"/>
            </FormItem>
          )}
        />
        </div>
        <div className="flex flex-col pt-10">
          <GeneratePodcast 
            setAudioStorageId={setAudioStorageId}
            setAudio={setAudioUrl}
            voiceType={voiceType!}
            audio={audioUrl}
            voicePrompt={voicePrompt}
            setAudioDuration={setAudioDuration}
            setVoicePrompt={setVoicePrompt}
          />

          <GenerateThumbnail 
            setImage={setImageUrl}
            setImageStorageId={setImageStorageId}
            image={imageUrl}
            imagePrompt={imagePrompt}
            setImagePrompt={setImagePrompt}
          />
          <div className="mt-10 w-full">
            <Button type="submit" className="text-16 w-full bg-orange-1 py-4 font-extrabold text-white-1 transition-all duration-500 hover:bg-black-1">
              {isSubmitting ? (
                <>
                  Submitting...
                  <Loader size={20} className="animate-spin mr-2" />
                  
                </>) : (
                  'Submit & Publish Podcast'
                )}
            </Button>
          </div>
        </div>
      </form>
    </Form>
    </section>
  )
}

export default CreatePodcast