from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from webdriver_manager.chrome import ChromeDriverManager

def q6_bot_consulta_jurisdicao():
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()))
    driver.get('https://www.tjpb.jus.br/comarcas/lista')

    cidades = WebDriverWait(driver, 10).until(
        EC.presence_of_all_elements_located((By.CSS_SELECTOR, "a.link-modal-comarca"))
    )

    resultado_final = []

    for cidade in cidades:
        if cidade.is_displayed():
            WebDriverWait(driver, 10).until(EC.element_to_be_clickable(cidade)).click()

            WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.CSS_SELECTOR, "div.modal-body")))

            table = WebDriverWait(driver, 10).until(EC.visibility_of_element_located((By.CSS_SELECTOR, "table.table-condensed")))

            tbody = table.find_element(By.TAG_NAME, "tbody")
            rows = tbody.find_elements(By.TAG_NAME, "tr")

            jurisdicoes = []

            for row in rows:
                cells = row.find_elements(By.TAG_NAME, "td")
                if len(cells) > 1:
                    jurisdicao_nome = cells[0].text.strip()
                    juiz_info = cells[1].text.strip()

                    juiz_info = juiz_info.replace("\n", " ").strip()

                    if "VAGO" in juiz_info:
                        juizes = [juiz_info]
                    else:
                        juizes = [juiz.strip() for juiz in juiz_info.split(",") if juiz.strip()]

                    jurisdicoes.append({
                        jurisdicao_nome: ", ".join(juizes)
                    })

            resultado = {
                "cidade": cidade.text,
                "jurisdicoes": jurisdicoes
            }

            resultado_final.append(resultado)
            
            driver.find_element(By.CSS_SELECTOR, "button.close").click()
            WebDriverWait(driver, 1).until(
                EC.invisibility_of_element((By.CSS_SELECTOR, "div.modal-body"))
            )

    driver.quit()
    return resultado_final

dados = q6_bot_consulta_jurisdicao()
print(dados)
