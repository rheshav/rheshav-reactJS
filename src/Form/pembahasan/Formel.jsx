import React from 'react';

class Formel extends React.Component {
  render() {
    <form>
      <label>
        Nama : <input type="text"></input>
      </label>
      <label>
        Jurusan :
        <select>
          <option value="">Pilih Jurusan</option>
          <option value="Teknik Informatika">Teknik Informatika</option>
          <option value="Sistem Informasi">Sistem Informasi</option>
          <option value="Design Komunikasi Visual">Design Komunikasi Visual</option>
        </select>
      </label>
      <label>
        Jenis Kelamin:
        <input type="radio" value="laki-laki"></input>
        <input type="radio" value="perempuan"></input>
      </label>
      <label>
        Alaamt : <textarea cols="30" rows="10" />
      </label>
      <label>
        Member: <input type="checkbox" value={true} />
      </label>
    </form>;
    return <div>a</div>;
  }
}

export default Formel;
