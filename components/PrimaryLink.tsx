interface PrimaryLinkProps {
  buttonText: string;
  buttonHref: string;
}

export default function PrimaryLink({
  buttonText,
  buttonHref,
}: PrimaryLinkProps) {
  return (
    <a
      href={buttonHref}
      className="mt-5 inline-block rounded-md border border-transparent bg-lime-700 px-8 py-3 text-center font-medium text-white hover:bg-lime-600"
    >
      {buttonText}
    </a>
  );
}
