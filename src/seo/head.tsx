import { Helmet, HelmetData } from "react-helmet-async";

export type HeadProps = {
  title?: string;
  description?: string;
};

const helmetData = new HelmetData({});

export const Head = ({ title = "", description = "" }: HeadProps = {}) => {
  return (
    <Helmet
      helmetData={helmetData}
      title={title ? `${title} | Mercelia` : undefined}
      defaultTitle="Mercelia"
    >
      <meta name="description" content={description} />
    </Helmet>
  );
};
