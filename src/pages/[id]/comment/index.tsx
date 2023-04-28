import { useRouter } from "next/router";

export default function CommentPage() {
  const router = useRouter();
  const { id } = router.query;

  return <div>{id} 의 Comment페이지 입니다.</div>;
}
