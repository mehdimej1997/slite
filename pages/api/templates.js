const carousel = [
  { title: "Talent acquisition", imgUrl: "/img/start.png", color: "bg-pink" },
  {
    title: "Stand-up meeting",
    imgUrl: "/img/meeting.png",
    color: "bg-orange",
  },
  { title: "Creative brief", imgUrl: "/img/brief.png", color: "bg-blue" },
  {
    title: "Employee handbook",
    imgUrl: "/img/handbook.png",
    color: "bg-customWhite",
  },
  { title: "Weekly re-views", imgUrl: "/img/reviews.png", color: "bg-pink" },
  { title: "Product planning", imgUrl: "/img/Plan.png", color: "bg-blue" },
  {
    title: "Onboarding cheklist",
    imgUrl: "/img/checklist.png",
    color: "bg-orange",
  },
  {
    title: "Product specs",
    imgUrl: "/img/specs.png",
    color: "bg-customWhite",
  },
];

export default function templates(req, res) {
  res.status(200).json(carousel);
}
