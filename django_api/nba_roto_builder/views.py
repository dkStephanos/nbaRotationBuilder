from django.views import View
from django.http import HttpResponse
from nba_api.stats.endpoints import teamdashlineups
from nba_api.stats.static import teams
import json


class Players(View):
    def get(self, request):
        pass


class Lineups(View):
    def get(self, request):
        nba_teams = teams.get_teams()
        dash = teamdashlineups.TeamDashLineups(nba_teams[0]["id"])

        return HttpResponse(
            content=json.dumps(
                {
                    "lineups": dash.lineups.get_json(),
                    "overall": dash.overall.get_json(),
                }
            )
        )
