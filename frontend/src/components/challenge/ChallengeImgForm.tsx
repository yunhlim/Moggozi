import { deleteObject, ref, uploadBytes } from "firebase/storage";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { storageService } from "../../fbase/fbase";
import { challengeImgFetchAPI } from "../../lib/imgApi";

import styles from "./ChallengeImgForm.module.scss";

const ChallengeImgForm: React.FC<{
  challengeImg: string;
  imgHandler: (url: string) => void;
}> = ({ challengeImg, imgHandler }) => {
  const [file, setFile] = useState<File>();
  const [previewImage, setPreviewImage] = useState("");
  const challengeId = Number(useParams().id);

  // 이미지 로드
  const onLoadHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    const fileList = event.target.files;

    if (fileList) {
      console.log(fileList[0]);
      setFile(fileList[0]);
      setPreviewImage(URL.createObjectURL(fileList[0]));
    }
  };
  // 이미지 서버에 업로드
  const uploadHandler = (event: React.MouseEvent, target: string) => {
    event.preventDefault();
    const imgRef = ref(storageService, target);
    uploadBytes(imgRef, file!).then(() => {
      challengeImgFetchAPI(challengeId).then((res) => imgHandler(res));
      setPreviewImage("");
    });
  };

  const deleteHandler = (event: React.MouseEvent, target: string) => {
    event.preventDefault();
    const imgRef = ref(storageService, target);
    deleteObject(imgRef);

    challengeImgFetchAPI(challengeId).then((res) => imgHandler(res));
  };

  return (
    <div className={styles.container}>
      {!challengeImg ? (
        <div>
          <form>
            {previewImage ? (
              <img className={styles.previewImg} src={previewImage} alt="img" />
            ) : (
              <div>
                <label htmlFor="img" className={styles.label}>
                  <div className={styles.readyImg}>
                    <div>해당 창을 클릭해</div>
                    <div>커버 사진을 업로드해 주세요.</div>
                    <div>
                      *권장 사이즈: 1920 x 1080, 최소 960 x 540 비율 (16:9){" "}
                    </div>
                    <div>커버사진 추가하기</div>
                  </div>
                </label>
                <input
                  type="file"
                  accept="image/*"
                  id="img"
                  className={styles.fileInput}
                  onChange={onLoadHandler}
                />
              </div>
            )}

            <button
              className={styles.uploadButton}
              type="button"
              onClick={(e) => uploadHandler(e, `challenge/${challengeId}`)}
            >
              업로드
            </button>
          </form>
        </div>
      ) : (
        <div>
          {/* <p>{challengeImg}</p> */}
          <img
            className={`${styles.previewImg} ${styles.coverImg}`}
            src={challengeImg}
            alt=""
          />
          <button
            className={styles.editButton}
            onClick={(e) => deleteHandler(e, `challenge/${challengeId}`)}
          >
            이미지 수정
          </button>
        </div>
      )}
    </div>
  );
};

export default ChallengeImgForm;
