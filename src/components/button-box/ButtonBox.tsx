import Dummy from './DummyComponent';
import { onHandleExternalPageOpen } from '../../util/index';
import './index.css';

interface params {
  srchCondition?: any;
  domRef?: any;
  callbackFunc?: any;
  data?: any;
  uploadConditions?: any;
  uploadFormData?: any;
  handleCtsMappingPopup?: any;
}

interface PageComponentInfo {
  [key: string]: Array<{
    component: JSX.Element | null;
  }>;
}

function ButtonBox(params: params) {
  const { uploadConditions, uploadFormData, srchCondition, handleCtsMappingPopup } = params;
  const pageName = 'psalescalc';
  const pageComponentInfo: PageComponentInfo = {
    psalescalc: [
      {
        component: (
          <Dummy name="excel-download" srchCondition={srchCondition} size="small" downCode="A">
            파라곤 매출정산내역 다운로드
          </Dummy>
        ),
      },
      {
        component: (
          <Dummy name="excel-download" srchCondition={srchCondition} size="small" downCode="B">
            파라곤 매출정산내역 다운로드(재무회계.ver)
          </Dummy>
        ),
      },
    ],
    csalescalc: [
      {
        component: (
          <Dummy
            name="fr-button"
            handler={() => {
              onHandleExternalPageOpen(pageName);
            }}
            size="small"
            type="R"
          >
            KCP 상점 관리사이트
          </Dummy>
        ),
      },
      {
        component: (
          <Dummy name="excel-download" size="small" downCode="B">
            유입채널 매출정산내역 업로드양식 다운로드
          </Dummy>
        ),
      },
      {
        component: (
          <Dummy
            name="fr-uploadbutton"
            size="small"
            // import mixin
            save="onHandleExcelUpload"
            isTavi="true"
            conditions={uploadConditions}
            formData={uploadFormData}
          >
            유입채널 거래내역 업로드
          </Dummy>
        ),
      },
      {
        component: (
          <Dummy name="excel-download" size="small" srchCondition={srchCondition} downCode="A">
            유입채널 매출정산내역 다운로드
          </Dummy>
        ),
      },
    ],
    prnpcalc: [
      {
        component: (
          // import mixin
          <Dummy name="excel-download" save="onHandleExcelUpload" size="small" conditions={uploadConditions}>
            XML 거래내역 업로드
          </Dummy>
        ),
      },
    ],
    prnpxml: [
      {
        component: (
          <Dummy name="fr-uploadbutton" size="small" srchCondition={srchCondition} downCode="A">
            웹투어 업체정산서 다운로드
          </Dummy>
        ),
      },
      {
        component: (
          <Dummy name="excel-download" size="small" srchCondition={srchCondition} downCode="A">
            웹투어 업체정산서 다운로드
          </Dummy>
        ),
      },
      {
        component: (
          <Dummy name="excel-download" size="small" srchCondition={srchCondition} downCode="C">
            파라곤 수불정산(TAVI)내역 다운로드
          </Dummy>
        ),
      },
    ],
    prnptavi: [
      {
        component: (
          <Dummy name="excel-download" size="small" srchCondition={srchCondition} downCode="A">
            파라곤 수불정산(XML)내역 다운로드
          </Dummy>
        ),
      },
    ],
    prnpcts: [
      {
        component: (
          <Dummy name="excel-download" size="small" srchCondition={srchCondition} downCode="A">
            파라곤 수불정산(CTS) 다운로드
          </Dummy>
        ),
      },
      {
        component: (
          <Dummy name="fr-button" type="U" size="small" handleCtsMappingPopup={handleCtsMappingPopup}>
            매핑 전처리(수동)
          </Dummy>
        ),
      },
    ],
    pexpcom: [
      {
        component: (
          <Dummy name="excel-download" size="small" downCode="B">
            Expedia 후컴 내역 업로드양식 다운로드
          </Dummy>
        ),
      },
      {
        component: (
          <Dummy
            name="fr-uploadbutton"
            size="small"
            // import mixin
            save="onHandleExcelUpload"
            conditions={uploadConditions}
            formData={uploadFormData}
          >
            Expedia 후컴 내역 업로드
          </Dummy>
        ),
      },
      {
        component: (
          <Dummy name="excel-download" size="small" srchCondition={srchCondition} downCode="A">
            Expedia 후컴 정산내역 다운로드
          </Dummy>
        ),
      },
    ],
    contclaim: [{ component: null }],
    contClaim: [{ component: null }],
    contrequested: [{ component: null }],
    contRequested: [{ component: null }],
    derby: [{ component: null }],
    tllincoln: [{ component: null }],
    tripanzee: [{ component: null }],
    siteminder: [{ component: null }],
    sanha: [{ component: null }],
    skypasscalc: [{ component: null }],
    cmspayrequest: [{ component: null }],
    skypasspayrequest: [{ component: null }],
    sprcalclist: [{ component: null }],
    incomecalc: [
      {
        component: (
          <Dummy name="excel-download" size="small" srchCondition={srchCondition} downCode="A">
            M&Service 분배금 정산내역 다운로드
          </Dummy>
        ),
      },
    ],
    affiliatecalc: [
      {
        component: (
          <Dummy name="excel-download" size="small" srchCondition={srchCondition} downCode="A">
            제휴사 인보이스 다운로드
          </Dummy>
        ),
      },
    ],
    tsusecalc: [
      {
        component: (
          <Dummy name="excel-download" size="small" srchCondition={srchCondition} downCode="A">
            TS이용권정산 요약 다운로드
          </Dummy>
        ),
      },
    ],
    couponcalc: [
      {
        component: (
          <Dummy name="excel-download" size="small" srchCondition={srchCondition} downCode="A">
            쿠폰정산 요약 다운로드
          </Dummy>
        ),
      },
    ],
    tavirnp: [
      {
        component: (
          <Dummy name="excel-download" size="small" srchCondition={srchCondition} downCode="A">
            TAVI수불정산 내역 다운로드
          </Dummy>
        ),
      },
    ],
    tavirnpinvoice: [
      {
        component: (
          <Dummy
            name="fr-uploadbutton"
            size="small"
            // import mixin
            save="onHandleExcelUpload"
            isTavi="true"
            conditions={uploadConditions}
          >
            송금 거래내역 업로드
          </Dummy>
        ),
      },
      {
        component: (
          <Dummy name="excel-download" size="small" srchCondition={srchCondition} downCode="A">
            TAVI 수불정산(송금) 내역 다운로드
          </Dummy>
        ),
      },
    ],
    tavirnpvcc: [
      {
        component: (
          <Dummy name="excel-download" size="small" srchCondition={srchCondition} downCode="A">
            TAVI 수불정산(VCC) 다운로드
          </Dummy>
        ),
      },
    ],
    tavirnpcts: [
      {
        component: (
          <Dummy name="excel-download" size="small" srchCondition={srchCondition} downCode="A">
            TAVI 수불정산(CTS) 다운로드
          </Dummy>
        ),
      },
      {
        component: (
          <Dummy name="fr-button" type="U" size="small" handleCtsMappingPopup={handleCtsMappingPopup}>
            매핑 전처리(수동)
          </Dummy>
        ),
      },
    ],
    sprpayrequest: [
      {
        component: (
          <Dummy name="excel-download" size="small" srchCondition={srchCondition} downCode="A">
            수불정산 보고서 다운로드
          </Dummy>
        ),
      },
    ],
    categorycalclist: [
      {
        component: (
          <Dummy name="fr-downloadbutton" size="small">
            선택 다운로드
          </Dummy>
        ),
      },
      {
        component: (
          <Dummy name="fr-downloadbutton" size="small">
            전체 다운로드
          </Dummy>
        ),
      },
    ],
    calchistorycalc: [
      {
        component: (
          <Dummy name="fr-downloadbutton" size="small">
            선택 다운로드
          </Dummy>
        ),
      },
    ],
    calchistoryinicis: [
      {
        component: (
          <Dummy name="fr-downloadbutton" size="small">
            다운로드
          </Dummy>
        ),
      },
    ],
    calchistoryinvoice: [
      {
        component: (
          <Dummy name="fr-downloadbutton" size="small">
            다운로드
          </Dummy>
        ),
      },
    ],
    calchistoryvcc: [
      {
        component: (
          <Dummy name="fr-downloadbutton" size="small">
            다운로드
          </Dummy>
        ),
      },
    ],
    calchistorycts: [
      {
        component: (
          <Dummy name="fr-downloadbutton" size="small">
            다운로드
          </Dummy>
        ),
      },
    ],
    calchistoryexpedia: [
      {
        component: (
          <Dummy name="fr-downloadbutton" size="small">
            다운로드
          </Dummy>
        ),
      },
    ],
    calchistorychannel: [
      {
        component: (
          <Dummy name="fr-downloadbutton" size="small">
            다운로드
          </Dummy>
        ),
      },
    ],
    excalclist: [
      {
        component: (
          <Dummy name="fr-downloadbutton" size="small">
            다운로드
          </Dummy>
        ),
      },
    ],
    changehistory: [
      {
        component: (
          <Dummy name="fr-downloadbutton" size="small">
            다운로드
          </Dummy>
        ),
      },
    ],
  };
  const pageRenderData = pageComponentInfo[pageName];

  return (
    <div className="button-box-container">
      <div className="el-row">
        {pageRenderData.map((item, index) => (
          <div style={{ marginLeft: '10px' }} key={index}>
            {item.component}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ButtonBox;
