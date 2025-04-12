import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router";

const FullShaurma = () => {
  const { id } = useParams();
  const [shaurma, setShaurma] = useState<{
    title: string;
    imageUrl: string;
    price: number;
    description: string;
  }>();

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchShaurma() {
      try {
        const { data } = await axios.get(
          `https://67c46ab7c4649b9551b38dbe.mockapi.io/items/${id}`
        );
        setShaurma(data);
      } catch (error) {
        alert("Ошибка");
        navigate("/");
      }
    }
    fetchShaurma();
  }, [id]);

  if (!shaurma) {
    return <h1 className="text-center text-2xl">Загрузка...</h1>;
  }
  return (
    <div className="flex items-center flex-col">
      <h1 className="text-4xl font-extrabold mt-5 mb-5">{shaurma.title}</h1>
      <img
        width={400}
        height={300}
        src={shaurma.imageUrl}
        alt={shaurma.title}
      />
      <h2 className="text-4xl font-bold">{shaurma.price} ₽</h2>
      <p className="text-2xl text-center max-w-2xl mt-4">
        {shaurma.description}
      </p>
      <Link className="group mt-5" to="/">
        <button className=" text-gray-400 px-5.5 py-3 rounded-3xl cursor-pointer border border-gray-300 flex gap-2 transition duration-200 group-hover:border-gray-400 group-hover:text-gray-400">
          <img
            className=" group-hover:-translate-x-1 transition duration-200"
            src="../Path.svg"
            alt="back"
          />
          Вернуться назад
        </button>
      </Link>
    </div>
  );
};

export default FullShaurma;
