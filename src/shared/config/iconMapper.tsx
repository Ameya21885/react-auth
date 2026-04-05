import { AiOutlineInbox } from "react-icons/ai";
import { MdStarBorder, MdOutlineMail, MdDeleteOutline } from "react-icons/md";
import { IoPaperPlaneOutline } from "react-icons/io5";
import { BiErrorCircle } from "react-icons/bi";

export const iconMapper: Record<string, React.ReactNode> = {
  inbox: <AiOutlineInbox size={22} />,
  star: <MdStarBorder size={22} />,
  send: <IoPaperPlaneOutline size={22} />,
  draft: <MdOutlineMail size={22} />,
  mail: <MdOutlineMail size={22} />,
  trash: <MdDeleteOutline size={22} />,
  spam: <BiErrorCircle size={22} />,
};
