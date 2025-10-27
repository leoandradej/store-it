import { FileRow } from "@/types";
import Thumbnail from "./Thumbnail";
import FormattedDateTime from "./FormattedDateTime";
import { convertFileSize, formatDateTime } from "@/lib/utils";

const ImageThumbnail = ({ file }: { file: FileRow }) => (
  <div className="file-details-thumbnail">
    <Thumbnail
      type={file.type}
      extension={file.extension as string}
      url={file.url}
    />
    <div className=" flex flex-col">
      <p className="subtitle-2 mb-1">{file.name}</p>
      <FormattedDateTime date={file.$createdAt} className="caption" />
    </div>
  </div>
);

const DetailRow = ({ label, value }: { label: string; value: string }) => (
  <div className="flex">
    <p className="file-details-label text-left">{label}</p>
    <p className="file-details-value text-left">{value}</p>
  </div>
);

export const FileDetails = ({ file }: { file: FileRow }) => {
  return (
    <>
      <ImageThumbnail file={file} />
      <div className="space-y-4 px-2 pt-2">
        <DetailRow label="Format:" value={file.extension as string} />
        <DetailRow label="Size:" value={convertFileSize(file.size as number)} />
        <DetailRow label="Owner:" value={file.owner.fullName} />
        <DetailRow label="Last Edit:" value={formatDateTime(file.$updatedAt)} />
      </div>
    </>
  );
};
