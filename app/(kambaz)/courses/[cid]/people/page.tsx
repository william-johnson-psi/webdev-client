import PeopleTable from "./table/page";

export default function People({
  params,
}: {
  params: Promise<{ cid: string }>;
}) {
  return <PeopleTable params={params} />;
}
