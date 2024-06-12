interface WelcomePageProps {
  params: {
    id: string;
  };
}
const VitaoPage = ({ params }: WelcomePageProps) => {
  return (
    <div>
      <h1>Welcome to VitaoPage! {params.id}</h1>
    </div>
  );
};

export default VitaoPage;
