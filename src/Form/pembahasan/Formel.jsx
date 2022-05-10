import React from 'react';

class Formel extends React.Component {
  state = {
    nama: '',
    jurusan: '',
    gender: '',
    alamat: '',
    member: false,
  };
  handleSubmit = (e) => {
    e.preventDefault();
    alert(`
  nama: ${this.state.nama}
  jurusan: ${this.state.jurusan}
  gender: ${this.state.gender}
  alamat: ${this.state.alamat}
  member: ${this.state.member ? 'YES' : 'NO'}
  `);
    this.setState({ nama: '', jurusan: '', gender: '', alamat: '', member: false });
  };

  render() {
    return (
      <div style={{ margin: '100px auto', border: '1px solid gray', padding: '20px' }}>
        <form onSubmit={this.handleSubmit}>
          <label>
            Nama : <input type="text" name="nama" onChange={(e) => this.setState({ nama: e.target.value })} defaultValue={this.state.nama}></input>
          </label>
          <br />
          <label>
            Jurusan :
            <select name="jurusan" onChange={(e) => this.setState({ jurusan: e.target.value })}>
              <option value="">Pilih Jurusan</option>
              <option value="Teknik Informatika">Teknik Informatika</option>
              <option value="Sistem Informasi">Sistem Informasi</option>
              <option value="Design Komunikasi Visual">Design Komunikasi Visual</option>
            </select>
          </label>
          <br />
          <label>
            Jenis Kelamin:
            <input type="radio" value="laki-laki" name="gender" onChange={(e) => this.setState({ gender: e.target.value })} />
            Laki-laki
            <input type="radio" value="perempuan" name="gender" onChange={(e) => this.setState({ gender: e.target.value })} />
          </label>
          <br />
          <label>
            Alamat : <textarea cols="30" rows="10" name="alamat" onChange={(e) => this.setState({ alamat: e.target.value })} value={this.state.alamat} />
          </label>
          <br />
          <label>
            Member: <input type="checkbox" checked={this.state.member} name="member" onChange={(e) => this.setState({ member: e.target.checked })} />
          </label>
          <br />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Formel;
