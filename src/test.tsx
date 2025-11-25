import { RPProvider, RPDefaultLayout, RPPages, RPConfig } from '@pdf-viewer/react';

interface PdfViewerProps {
  fileUrl: string;
}

const PdfViewer = ({ fileUrl }: PdfViewerProps) => {
  return (
    <RPConfig>
      <RPProvider src={"/certificates/prgrammingSkills/certificate-of-completion-for-08-algorithms-problem-solving-level-4.pdf"}>
        <RPDefaultLayout style={{ height: '660px' }}>
          <RPPages />
        </RPDefaultLayout>
      </RPProvider>
    </RPConfig>
  );
};

export default PdfViewer;
