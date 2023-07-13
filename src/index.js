import "./style.scss";

const a = async () => {
  return await Promise.resolve('woo hooo')
}

a()
  .then(console.log)
