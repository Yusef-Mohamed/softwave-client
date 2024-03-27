import { getTranslations } from "next-intl/server";
import { Carousel, CarouselContent, CarouselItem } from "../ui/carousel";
import { RenderStars } from "../ui/render-stars";
import SectionHeading from "../ui/section-heading";

const feedbacks = [
  {
    clientName: "Yusuf Mohammed",
    clientTitle: "CEO Hummus",
    clientImage: "/images/clients/client-1.jpg",
    feedback:
      "I have benefited a lot from the services of Code Plus company and I recommend everyone to deal with them",
    rating: 5,
  },
  {
    clientName: "John Doe",
    clientTitle: "CEO Enterprises",
    clientImage: "/images/clients/client-2.jpg",
    feedback:
      "Code Plus has been instrumental in the success of our software projects. Highly recommended!",
    rating: 4.5,
  },
  {
    clientName: "Jane Smith",
    clientTitle: "Project Manager",
    clientImage: "/images/clients/client-3.jpg",
    feedback:
      "The team at Code Plus is knowledgeable and professional. They have consistently delivered high-quality code for our projects.",
    rating: 4.7,
  },
  {
    clientName: "Robert Johnson",
    clientTitle: "Founder Johnson",
    clientImage: "/images/clients/client-4.jpg",
    feedback:
      "Working with Code Plus has been a great experience. Their commitment to quality and customer satisfaction is impressive.",
    rating: 4.8,
  },
  {
    clientName: "Yusuf Mohammed",
    clientTitle: "CEO Hummus",
    clientImage: "/images/clients/client-1.jpg",
    feedback:
      "I have benefited a lot from the services of Code Plus company and I recommend everyone to deal with them",
    rating: 5,
  },
  {
    clientName: "John Doe",
    clientTitle: "CEO Enterprises",
    clientImage: "/images/clients/client-2.jpg",
    feedback:
      "Code Plus has been instrumental in the success of our software projects. Highly recommended!",
    rating: 4.5,
  },
  {
    clientName: "Jane Smith",
    clientTitle: "Project Manager",
    clientImage: "/images/clients/client-3.jpg",
    feedback:
      "The team at Code Plus is knowledgeable and professional. They have consistently delivered high-quality code for our projects.",
    rating: 4.7,
  },
  {
    clientName: "Robert Johnson",
    clientTitle: "Founder Johnson",
    clientImage: "/images/clients/client-4.jpg",
    feedback:
      "Working with Code Plus has been a great experience. Their commitment to quality and customer satisfaction is impressive.Working with Code Plus has been a great experience. Their commitment to quality and customer satisfaction is impressive.Working with Code Plus has been a great experience. Their commitment to quality and customer satisfaction is impressive.",
    rating: 4.8,
  },
];
const OurClientsFeedBack = async () => {
  const text = await getTranslations("ourClientsFeedBack");
  return (
    <section className="py-16 ">
      <div className="container">
        <SectionHeading
          title={text("title")}
          subtitle={
            <>
              {text("paragraph")}{" "}
              <span className="font-semibold text-primary">
                {text("soft_wave")}
              </span>
            </>
          }
        />
        {/* <Carousel>
          <CarouselContent>
            {feedbacks.map((feedback, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="my-shadow bg-white p-4 m-2 rounded-md">
                  <div className="flex gap-4 items-center">
                    <div className="aspect-square rounded-full h-24 animate-pulse  bg-muted-foreground"></div>
                    <div className="flex-1">
                      <RenderStars rating={feedback.rating} />
                      <h4 className="font-semibold mt-2 mb-4">
                        {feedback.clientName}{" "}
                        <span className="text-muted-foreground font-medium">
                          / {feedback.clientTitle}
                        </span>
                      </h4>
                    </div>
                  </div>
                  <p className="m-4 text-muted-foreground line-clamp-3">
                    {feedback.feedback}{" "}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel> */}
      </div>
    </section>
  );
};

export default OurClientsFeedBack;
