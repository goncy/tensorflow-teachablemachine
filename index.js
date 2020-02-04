import * as tmImage from "@teachablemachine/image"

const MODEL = "https://teachablemachine.withgoogle.com/models/6gG-u3rO";

tmImage.load(`${MODEL}/model.json`, `${MODEL}/metadata.json`).then(model => {
  model.predict(document.getElementById("image")).then(console.log);
});