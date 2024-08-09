import React from "react";
import {Card, CardFooter, Image, Button} from "@nextui-org/react";

export default function App() {
  return (
    <Card isFooterBlurred radius="lg" className=" relative overflow-hidden">
      <Image
        alt="Woman listening to music"
        className="object-cover"
        height={300}
        src="https://blog.tubikstudio.com/wp-content/uploads/2023/07/poster-app-design-case-study-tubik-768x576.jpg"
        width={400}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">Available soon.</p>
        <Button className="text-tiny text-white bg-black/20 hover:bg-opacity-100" variant="flat" color="default" radius="lg" size="sm">
          Notify me
        </Button>
      </CardFooter>
    </Card>
  );
}
