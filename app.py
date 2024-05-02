from flask import Flask, send_file, render_template, jsonify, request, flash, session

app = Flask(__name__)
app.secret_key = 'q1w2e345'

@app.route('/')
def index():
    session['usuario'] = 'gabs'
    return render_template('index.html')

@app.route('/dashboard')
def dashboard():
    return render_template('dashboard.html')

@app.route('/dashboard2')
def dashboard2():
    return render_template('dashboard2.html')

@app.route('/scan', methods=['GET', 'POST'])
def scan():
    if request.method == 'POST':
        asns = request.form['asn']
        asns = asns.split(',')
        asns = [asn.strip() for asn in asns if asn.strip()]
        asns = set(asns)
        if not asns:
            flash("Nenhum ASN foi digitado", "error")
        elif len(asns) > 5:
            flash("É preciso que adicione os asn's em uma lista txt, pois excederam o limite aceito.", "error")
        #vulnScan = request.form.getlist['vulnScan']
        print(asns)
    return render_template('scan.html')

@app.route('/relatorio')
def relatorio():
    return render_template('relatorio.html')

@app.route('/relatorio-scan')
def relatorioScan():
    return render_template('relatorio-scan.html')

@app.route('/download')
def arquivo():
    return send_file("arquivo/planilha.xlsx", as_attachment=True)

# Dados dos gráficos
#Gráfico barra
@app.route('/dadosbar')
def obter_dados():
    dados = {
        'labels': ['Jan', 'Fev', 'Mar', 'Abril', 'Maio', 'Junho','Julho', 'Agosto', 'Set', 'Out', 'Nov', 'Dez'],
        'dados': [10, 20, 80]
    }
    return jsonify(dados=dados)

#Gráfico linha
@app.route('/dadosline')
def dados_line():
    dados_do_grafico = {
        'labels': ['Jan', 'Fev', 'Mar', 'Abril', 'Maio', 'Junho','Julho', 'Agosto', 'Set', 'Out', 'Nov', 'Dez'],
        'dados': [10, 20, 80]
    }
    return jsonify(dados_do_grafico)

#Gráfico barra2
@app.route('/dadosbar2')
def obter_dados2():
    dados2 = {
        'labels': ['52863', '28856', '16549', '85694', '12365', '16542'],
        'dados': [200, 120 , 115, 60, 25, 15]
    }
    return jsonify(dados2=dados2)

#Gráfico circular
@app.route('/dados_circular')
def obter_dados_circular():
    dados_grafico = {
        'labels': ['NTP', 'BGP', 'DNS'],
        'dados': [10, 20, 80]
    }
    return jsonify(dados_grafico)


if __name__ == '__main__':
    app.run(debug=True)