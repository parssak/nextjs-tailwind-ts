import { Button, Text } from "@parssa/universal-ui";

export default function Page() {
  return (
    <div className="container pt-24 md:pt-48">
      <Text variant="h1">A Next 13 App with TailwindCSS 3.2</Text>
      <Text className="mt-size-4y">
        Also, pre-configured with{" "}
        <Text
          as="a"
          href={"https://universal-ui.vercel.app/"}
          variant="code"
          className="font-mono"
          size="sm"
        >
          @parssa/universal-ui
        </Text>
      </Text>
      <Button
        target={"_blank"}
        as="a"
        href={"https://universal-ui.vercel.app/"}
        className="mt-size-4y group flex w-max"
        trailingIcon={
          <svg
            className="w-full h-full group-hover:translate-x-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        }
      >
        Learn More
      </Button>
    </div>
  );
}
